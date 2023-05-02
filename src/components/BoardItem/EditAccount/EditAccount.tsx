import React, {useState} from 'react';
import cn from "classnames";
import {AccountTypeEnum} from "../../../types";
import {useDispatch} from "react-redux";
import {changeAccountTitle, removeExternalAccount} from "../../../redux/accounts/actions";
import NormalState from "./NormalState";
import EditState from "./EditState";
import styles from '../BoardItem.module.css';
import {AppDispatch} from "../../../redux/store/store";

type EditAccountType = {
  id?: number,
  type?: AccountTypeEnum,
  title?: string,
  customTitle?: string,
}

const EditAccount = (props: EditAccountType): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const [isEdit, setEdit] = useState(false);

  const handleClickDel = () => dispatch(removeExternalAccount({id: props.id}));
  const handleClickEdit = ():void => setEdit(true);
  const handleClickCheck = (newTitle:string):void => {
    setEdit(false);
    dispatch(changeAccountTitle({id: props.id, customTitle: newTitle}))
  };

  return (
    <>
      {
        isEdit ?
          <EditState onClickCheck={handleClickCheck}/> :
          <NormalState
            title={props.title}
            onClickEdit={handleClickEdit}
          />
      }
      {
        props.type === AccountTypeEnum.EXTERNAL &&
        <button
          className={cn(styles.button, styles.removeButton)}
          onClick={handleClickDel}>
        </button>
      }
    </>
  )
}

export default EditAccount;
