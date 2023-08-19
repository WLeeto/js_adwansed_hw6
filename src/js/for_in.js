
export default function orderByProps(obj, order) {
    const result = [];
  
    for (const prop of order) {
      if (obj.hasOwnProperty(prop)) {
        result.push({ key: prop, value: obj[prop] });
      }
    }
  
    const unorderedProps = Object.keys(obj).filter(prop => !order.includes(prop));
    unorderedProps.sort();
  
    for (const prop of unorderedProps) {
      result.push({ key: prop, value: obj[prop] });
    }
  
    return result;
  }
  