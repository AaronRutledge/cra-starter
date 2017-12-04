import React from 'react';
import Table from 'rc-table';
import './assets/index.css';
import './assets/bordered.css';

const HorizontalScrollTable = props => {
const columns = [
  { title: 'Investor', dataIndex: 'a', key: 'a', width: 100, fixed: 'left' },
  { title: 'USD (Milions)', 
    children: [
      {
        title: 'Soft',
        dataIndex: 'b', 
        key: 'b', 
        width: 100, 
        fixed: 'left'
      },
      { 
        title: 'Firm', 
        dataIndex: 'c', 
        key: 'c' 
      }
    ] },
  ,
  { title: 'Region', dataIndex: 'b', key: 'd' },
  { title: 'Country', dataIndex: 'b', key: 'e' },
  { title: 'Investor Type', dataIndex: 'b', key: 'f' },
  { title: 'Enagagement', dataIndex: 'b', key: 'g' },
  { title: 'Key Investor', dataIndex: 'b', key: 'h' },
  { title: 'Net Roadshow', dataIndex: 'b', key: 'i' },
  { title: 'Physical Roadshow', dataIndex: 'b', key: 'j' },
  { title: 'Created', dataIndex: 'b', key: 'k' },
  { title: 'Last Modified', dataIndex: 'b', key: 'l' },
];

const data = [
  { a: '123', b: 'xxxxxxxx', d: 3, key: '1' },
  { a: 'cdd', b: 'edd12221', d: 3, key: '2' },
  { a: '133', c: 'edd12221', d: 2, key: '3' },
  { a: '133', c: 'edd12221', d: 2, key: '4' },
  { a: '133', c: 'edd12221', d: 2, key: '5' },
  { a: '133', c: 'edd12221', d: 2, key: '6' },
  { a: '133', c: 'edd12221', d: 2, key: '7' },
  { a: '133', c: 'edd12221', d: 2, key: '8' },
  { a: '133', c: 'edd12221', d: 2, key: '9' },
];
  return(
  <div style={{ width: '100%' }}>
    <h2>Fixed columns</h2>
    <Table
      columns={columns}
      scroll={{ x: 1200 }}
      data={data}
      className="bordered" 
    />
  </div>
  );
}

export default HorizontalScrollTable;