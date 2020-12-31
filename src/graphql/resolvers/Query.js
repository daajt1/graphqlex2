import  {Message} from '../../models/Message'
import  {Hobby } from '../../models/Hobby'

const Query = {
     ping() {
         return "pong!"
     }
}

messages : async () => {
  return await Message.find()
}

hobbys : async() => {
    return await Hobby.find()
}

export default Query