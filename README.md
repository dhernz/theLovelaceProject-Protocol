The Lovelace protocol enables the personalized creation of governance models by Communities and DAOs by drawing from accessible on-chain information provided by web3 protocols such as POAP, NFTs, Mintkudos, etc to set requirements for the members to evolve as contributors and participants. 

We are particularly proud of building an inclusive governance model that enables communities that are resource strapped to scale with no overhead and financial costs. This is how communities in emerging markets can continue to grow and incentivize their members to participate.

With a simple and friendly UI, the Lovelace Protocol first asks users to connect with the protocol through Worldcoin, Polygon ID or a Wallet address to prevent Sybil attacks and to identify and use on-chain recorded interactions of the member. 

On the backend, once the wallet address of the member is recognized, this triggers a call to the Dune API to identify the NFTs and POAPs attributed to this wallet. After receiving the result from ownership query from Dune, the response is used by the code to identifies which community this wallet is linked to and is compared against the levels defined by the community to verify the right level is assigned. Once the level is confirmed, based on the POAPs and NFTs owned, an SBT is minted on the Optimism chain to reduce minting costs. 

This SBT reflects the level a member is at for a certain community, the Team it is part of (if the person is a higher level contributor), the Role, and the permissions it has based on its level. The SBT images are stored on IPFS to ensure that information is available at all times. These SBTs evolve as the contributions of a member increase, through its SBTs nature we hinder the reselling or falsification of identities among members and, if worst comes to worst, the SBT can be revoked by DAO admins directly from the dashboard. Our SBTs are minted on the Polygon network, reducing costs for nascent DAOs. 

Once minted into a members wallet, the SBT enables private member voting, access to gated content through the Unlock capabilities, communication with other Team members through the XMTP chat and notification integration. 

The platform offers two dashboards: one for Admins and one for Members. 

The Admin dashboard uses Dune and The Graph to display data visualizations of Membership information and allows for the simple setting of rules to be fulfilled to move through membership levels. The dashboard also allows for easy querying of member profiles and communication with them. 

While the Member dashboard provides information to the state of a members contributions/interactions, notifications on actions to take, messages with peers through XMTP, and incentivizes collaboration by displaying the activities to be fulfilled to advance to the next level. 
