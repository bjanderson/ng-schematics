#!/bin/bash

#this is intended to be used in a test project that imports these schematics
#npm i -D @bjanderson/schematics@latest

rm -rf src/app/{components,models,services,store}

ng generate @bjanderson/schematics:model --name test-model
ng generate @bjanderson/schematics:model -n test-model1

ng generate @bjanderson/schematics:component --name test-component
ng generate @bjanderson/schematics:component -n test-component-m -m
ng generate @bjanderson/schematics:component -n test-component-r -r
ng generate @bjanderson/schematics:component -n test-component-p -p testprefix

ng generate @bjanderson/schematics:service --name test-service
ng generate @bjanderson/schematics:service -n test-service1

ng generate @bjanderson/schematics:store --name test-store
ng generate @bjanderson/schematics:store -n test-store1
