            - name: Aspect Workflows
  # You may pin to the exact commit or the version.
  # uses: aspect-build/workflows-action@a2675918ae93f545dc34e70835b711bbf35e84b2
  uses: aspect-build/workflows-action@5.9.24
  with:
    # path from the git repository to the WORKSPACE.bazel file
    workspace: # default is .
    # the task that we want to generate steps for and then run
    task: 
    # additional arguments to be passed to the task instance
    args: # optional, default is 
          
          name: NodeJS with Gulp

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]

    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Build
      run: |
        npm install
        gulp
