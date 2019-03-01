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
    
    this.props.actions.showModal({
      title: 'Are you sure?',
      description: 'By deleting your location, all associated fees and availability slots will be lost.',
      showButtonA: true,
      showButtonB: true,
      buttonACustomHandler: this.testAtIndex,
      buttonACustomHandlerParameter: removeIndex,
    });

## Usage

    import { showModal } from '@time-with/modal';

    actions.modal( <SomeReactComponent /> );


## License

MIT
