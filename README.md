# easytier-ffi nodejs

> using ffi-napi

## running

* app.yaml

```code
instance_name = "easytier"
instance_id = "2d97d178-8f67-4003-b286-6d47fa9dbed3"
dhcp = true
listeners = [
    "tcp://0.0.0.0:11010",
    "udp://0.0.0.0:11010",
    "wg://0.0.0.0:11011",
]
rpc_portal = "0.0.0.0:0"

[network_identity]
network_name = "xxxxx"
network_secret = "xxxxxxx"

[[peer]]
uri = "tcp://xxxxx:11010"

[flags]
```

* starting

```code
yarn  
yarn s
```