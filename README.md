# PCF Demo

## Pre-requisites
1. "cf" CLI. If not [Download](https://github.com/cloudfoundry/cli/releases) 
2. Access to any PCF installation. It could be [run.pivotal.io](http://run.pivotal.io) or local/inhouse PCF installation
3. Credentials to access & developer role privilege to deploy applications

## Commands

``` 
cf help 
```

``` 
cf apps 
```

``` 
cf logs <app-name> --recent 
```

```
cf app <app-name> \
```

```
cf env <app-name>
```

```
cf push 
```

``` 
cf 
```

``` 
cf create-service p-mysql  pre-existing-plan <service-name> 
```

``` 
cf bind-service <app-name> <service-name>
```

```
cf restage <app-name>
```

```
cf create-user-provided-service oracle-db -p '{"uri":"oracle://root:secret@dbserver.example.com:1521/mydatabase"}'
```

```
cf create-user-provided-service mysql-db -p '{"uri":"mysql://root:secret@dbserver.example.com:3306/mydatabase"}'
```

``` 
cd C:\Program Files\MariaDB 10.1\bin 
mysqld.exe --datadir=..\data --console
```
