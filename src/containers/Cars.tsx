import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IState } from '../redux/car';

import { client } from './../contenful'

interface IProps {
}

const CarScreen: React.FunctionComponent<IProps> = ({
}) => {
  React.useEffect(() => {
    client.getEntries().then(entries => console.log(entries.toPlainObject()))
  });
  return (
    <div>
      <h1>Paca 36</h1>
      <p>Cars</p>
    </div>
  )
};

// Normally i would use something like reselect but normally i also wouldn't use redux for this so....
const mapStateToProps = (state: { car: IState }): any => ({
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
})

const ConnectedCarScreen = connect(mapStateToProps, mapDispatchToProps)(CarScreen);

export {
  ConnectedCarScreen
};
