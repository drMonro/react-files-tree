import React, {useState, useEffect} from 'react';
import {useGetDataQuery} from '../../store/api-reducer';
import {Tree} from 'antd';
import {nanoid} from 'nanoid';

const {TreeNode} = Tree;

function FilesTree() {
  const {data: fetchedData, isSuccess: isSuccessFetchedData} = useGetDataQuery(undefined);
  const [stateData, setData] = useState(null);

  useEffect(() => {
    if (isSuccessFetchedData && fetchedData) {
      setData(fetchedData);
    }
  }, [fetchedData, isSuccessFetchedData, stateData]);

  const renderTreeNodes = (data: any): any =>
    data.map((item: any) => {
      if (item.contents) {
        return (
          <>
            <TreeNode title={item.name} key={nanoid()}>
              {renderTreeNodes(item.contents)}
            </TreeNode>
          </>
        );
      }
      return <TreeNode title={item.name} key={nanoid()}/>;
    });

  if (!isSuccessFetchedData) {
    return (
      <p>Loading ...</p>
    );
  }

  return (
    <div>
      <Tree>
        {renderTreeNodes(fetchedData)}
      </Tree>
      <h1>hi</h1>
    </div>
  );
}

export default FilesTree;
