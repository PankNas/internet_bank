import React, {useContext} from "react";
import NewAccountForm from "../components/NewAccountForm/NewAccountForm";

import styles from '../App.module.css'
import {SubmitContext} from '../context';

const AddNewCardPage = (): JSX.Element => {
  const {onSubmit} = useContext(SubmitContext);

  return (
    <div className={styles.pageContent}>
      <NewAccountForm handleSubmit={onSubmit}/>
    </div>
  )
};

export default AddNewCardPage;
