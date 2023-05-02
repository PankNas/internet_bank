import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Timeline from "../components/Timeline/Timeline";

import styles from '../App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {loadOperations} from "../redux/operations/actions";

const TimelinePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const {accountId} = useParams();
  const [isLoading, setLoading] = useState(true);
  const operations = useSelector((state: any) => state.operations);

  const title:string = operations.length > 0 ? 'Список операций' : 'По данному аккаунту нет операций';

  useEffect(() => {
    const fetchOperations = async () => dispatch(loadOperations(accountId));

    fetchOperations()
      .then(_ => setLoading(false));

    return setLoading(true);
  }, [accountId]);

  return (
    <div className={styles.pageContent}>
      {isLoading ? <h2>Подождите, идет загрузка...</h2> : <h2>{title}</h2>}
      <Timeline items={operations}/>
    </div>
  );
};

export default TimelinePage;
