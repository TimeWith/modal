# Timewith Modal

Timewith Modal

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install @time-with/modal
or
$ yarn add @time-with/modal
```

## Setup

Add the module to the root Router of the React layout

    import TWModal from '@time-with/modal'

    render() {
      return (
        <Router>
          <div id='layout-root'>
            <TWModal />
            // ...

Import the reducer to your reducers combiner
    
    
    import { modalReducer } from '@time-with/modal';

    

## Usage

    import { modalReducer } from '@time-with/modal';

    export default combineReducers({
      modalReducer,
      ...other reducers
    });


## License

MIT
