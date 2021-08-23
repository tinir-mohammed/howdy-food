import React, {useState} from 'react'
import {Card, CardContent, TextField, Button, Typography} from '@material-ui/core'

const OrderStatus = ({getOrderStatus, restaurant_id, order}) => {
  const [status, setStatus] = useState("")
  return (
    <div>
      <Card>
          <CardContent>
            <TextField
              id="standard-full-width"
              label="Table"
              style={{ margin: 8 }}
              placeholder="Enter your Order number"
              fullWidth
              variant="outlined"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button onClick={() => getOrderStatus(status * 1, restaurant_id)} variant="contained">Check Order Status</Button>
          </CardContent>
        </Card>
        <Card style={{ marginTop: 8, padding: 18 }}>
          <Typography component="h2" variant="h5">
            Your Order Status is : {order.status}
          </Typography>
        </Card>
    </div>
  )
}

export default OrderStatus
