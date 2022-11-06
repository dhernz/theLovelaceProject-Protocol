//SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract HelloWorld {
    /* 
    Emitting events is necessary for communicating with our subgraph.
    When our smart contract emits events during a transaction,
    our subgraph reacts to handle those events and map them to our defined entities in our Schema.
    */
    event NewGreetingCreated( // Event is emitted everytime the createNewGreeting() function is called
        bytes32 greetingId, // Greeting identifier
        string greetingDataCID, // CID that points to our data stored on IPFS
        address greetingOwner, // Address of the person who created this specific greeting
        uint256 timestamp // Timestamp of when the greeting was created; So we can sort by date ranges
    );

    event RecievedGreeting(bytes32 greetingId, address from); // Event is emitted everytime our sendGreeting() function is called 

    /* 
    A Struct to represent a Greeting.
    A Struct is like creating a new data type that holds information that are related to eachother. 
    */
    struct Greeting { 
        bytes32 greetingId;
        string greetingDataCID;
        address greetingOwner;
        uint256 timestamp;
        uint256 recieved; // Here we store & keep track of Greetings recieved by other users
    }

    /* 
    Mappings are what we create when we want to stora data on the blockchain.
    They store values in the form of key-value pairs.
    Below we define a mapping between the greetingId (key) to the Greeting struct (value).
    It's our storage for our Greetings.
    */
    mapping(bytes32 => Greeting) public idToGreeting;

    /*
    Below we define an external function,
    which means it cannot be called from within our smart contract only *externally*.

    Any function signature that does not contain the words "pure" or "view" will modify the state of the blockchain.
    Any time we modify the state of the blockchain we must pay gas. 

    The function below is modifying the state of the blockchain because it is adding to our greetings storage.
    */
    function createNewGreeting( // Create a new greeting by providing the CID to our data stored on ipfs to associate with our greeting 
        string calldata greetingDataCID
    ) external {
        // Get timestamp (in seconds)
        uint256 timestamp = block.timestamp;

        // Creating a unique identifier for every new greeting created
        bytes32 greetingId = keccak256(
            abi.encodePacked(
                msg.sender, // address of the function caller
                address(this), // address of the contract instance
                timestamp,
                greetingDataCID
            )
        );

        // Adding to our Greetings storage
        idToGreeting[greetingId] = Greeting (
            greetingId,
            greetingDataCID,
            msg.sender,
            timestamp,
            0 // recieved greetings
        );

        // Emit event that announces a new Greeting was created
        emit NewGreetingCreated(
            greetingId,
            greetingDataCID,
            msg.sender,
            timestamp 
        );
    }

    // Send a Greeting back to an existing Greeting by providing the greetingId
    function sendGreeting(bytes32 greetingId) external {
        // Retrieve the existing Greeting from our storage with the greetingId
        Greeting storage greeting = idToGreeting[greetingId];
        // Require that the function caller (msg.sender) is not the owner of the greeting
        require(msg.sender != greeting.greetingOwner, "You cannot greet yourself.");
        // Update Greeting
        greeting.recieved += 1;
        // Emit event that announces the greeting associated with the greetingId recieved a new greeting from msg.sender
        emit RecievedGreeting(greetingId, msg.sender);
    }
}