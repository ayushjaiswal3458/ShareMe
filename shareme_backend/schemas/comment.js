export default{
     name: 'comment',
     title: 'Comment',
     type: 'document',
     fields: [
         {
            name:'posteBy',
            title: 'PostedBy',
            type: 'postedBy'
         },
         {
            name:'comment',
            title: 'Comment',
            type: 'string'
         }
     ]
}