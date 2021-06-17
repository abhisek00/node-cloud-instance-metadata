# Retrive Cloud instance metadata using NodeJS RestApi

## Features

This project is used to retrieve a piece of metadata for a running AWS EC2
instance using NodeJS rest Api. 

## Getting Started

### Prerequisites

- NPM and NodeJS


### Installation & Quickstart

Please follow https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html for install nodejs on an Amazon EC2 Instance

After successful NodeJS installation use below commands -
- `npm install`
- `npm start`

The NodeJs server runs on port 3000

## Api usage

### Retrieve Instance metadata

To retrieve all available options for instance metadata - 

`/api/v1/metadata/`

`Response` -

{"availableParameters":"ami-id ,ami-launch-index ,ami-manifest-path ,block-device-mapping/ ,events/ ,hibernation/ ,hostname ,identity-credentials/ ,instance-action ,instance-id ,instance-life-cycle ,instance-type ,local-hostname ,local-ipv4 ,mac ,managed-ssh-keys/ ,metrics/ ,network/ ,placement/ ,profile ,public-hostname ,public-ipv4 ,public-keys/ ,reservation-id ,security-groups ,services/"}

To retrieve specific instance metadata -

`/api/v1/metadata/<id>`

Example - To retrieve the instance event 
/api/v1/metadata/events

`Response` -

{"name":"events","value":"maintenance/"}

### Retrieve dynamic data

To retrieve all available options for dynamic metadata - 

`/api/v1/dynamicdata/`

`Response` -
{"availableParameters":"signature ,rsa2048 ,pkcs7 ,document ,"}

To retrieve specific dynamic metadata -

`/api/v1/dynamicdata/document`
