# Gossip Client for Ranvier

This bundle is a sample implementation of a client to the [Gossip Network][gossip].

To enable:

- Register for an account on [gossip.haus][gossip], and then register your game
  - You will get a Client ID and Client Secret from this step, you will use it in the configuration below
- Clone to your bundles folder
- Add the `"gossip-ranvier"` bundle in `ranvier.json`
- Add the following configuration to `ranvier.json`

```json
{
  "gossip": {
    "url": "wss://gossip.haus/socket",
    "clientId": "client id",
    "clientSecret": "client secret",
    "channels": {
      "gossip": "gossip"
    }
  }
}
```

The channels configuration key is set up as an object with the remote channel as the key, and the local channel as the value.

[gossip]: https://gossip.haus/
