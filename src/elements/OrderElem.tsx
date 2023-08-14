import React from 'react';

const OrderElem = () => {
  return (
    <tr>
      <td>Fresh Kebab (Chicken/small)</td>
      <td className="order__count"><button>+</button><span>1</span><button>-</button></td>
      <td>6.90 £</td>
    </tr>
  );
};

export default OrderElem;