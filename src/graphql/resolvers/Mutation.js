import Message from  '../../models/Message';
import Hubby  from '../../models/Hobby';
const Mutation = {

   createMessage: async (_, {title,content,author}) => {
     const newmessage =   new Message( {title,content,author})
     return await newmessage.save()
   },
   createHubby: async (_, {listHubby,practice,categoryHubby}) => {
       const newHubby = new categoryHubby( {listHubby,practice,categoryHubby})
       return await newHubby.save()
   }
};


export default Mutation