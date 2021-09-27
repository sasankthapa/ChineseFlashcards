# Chinese Flash Cards

Currently migrating from a react frontend to a vue frontend with vuex for state management. This change comes from me wanted to explore a new javascript framework, as well as design changes from implementing the tree structure.

## Tree structure in MongoDB

```javascript
parentNode:{
  type:mongoose.Schema.Types.ObjectId,
  required:false,
  ref:'parent'
},
childNode:[{
  type:mongoose.Schema.Types.ObjectId,
  reqired:false,
  ref:'child'
}]
```

### parent references to look up words
For any compound word, we start at the last charecters and recursively look up its parent until it is null.

### child references to add words
Start at the first character and retrieve a list of children for that character, allow the user to select a character with the correct meaning or a question node in case you don't know the actual meaning.
Retrieve this step by step for next characters.
