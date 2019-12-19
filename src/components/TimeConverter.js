export default function timeConverter(n) {
  const number = n.replace('PT', '').replace('M', '');
  const hours = Math.floor(number / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + 'h ' + rminutes + 'min';
}
