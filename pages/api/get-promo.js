export default async(req, res) => {
  res.end(JSON.stringify({
    showCoupon: true,
    message: 'Ola FSM'
  }));
}