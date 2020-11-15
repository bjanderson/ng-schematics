#!/bin/bash

#this is intended to be used in a test project that imports these schematics
#npm i -D @bj.anderson/schematics@latest

rm -rf src/app/{components,models,services,store}

ng generate @bj.anderson/schematics:model --name test-model
ng generate @bj.anderson/schematics:model -n test-model1

ng generate @bj.anderson/schematics:component --name test-component
ng generate @bj.anderson/schematics:component -n test-component-m -m
ng generate @bj.anderson/schematics:component -n test-component-r -r
ng generate @bj.anderson/schematics:component -n test-component-p -p testprefix

ng generate @bj.anderson/schematics:service --name test-service
ng generate @bj.anderson/schematics:service -n test-service1

ng generate @bj.anderson/schematics:store --name test-store
ng generate @bj.anderson/schematics:store -n test-store1
