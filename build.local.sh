#!/bin/bash  

# if permission denied
# run script with ` chmod +x build.sh ` 
readonly ServerName="ChatServer"
readonly SgridFile="sgrid_app"
# rm
rm ./$ServerName.tar.gz ./$SgridFile

# compile
go build -o $SgridFile

# build
tar -cvf $ServerName.tar.gz ./sgrid.yml ./$SgridFile dist