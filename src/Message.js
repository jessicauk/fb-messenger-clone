import React, {forwardRef} from 'react'
import {Typography, CardContent, Card} from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({username, message}, ref) => {
  const isUser = username === message.username
  return (
    <div ref={ref} className={`message ${isUser === true && 'message_user'}`}>
      <Card className={`${isUser === true ? 'message_userCard': 'message_guestCard'}`}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {isUser === false && `${message.username || 'Unknow user'}: `}  {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export default Message
