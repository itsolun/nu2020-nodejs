//references
//https://mongoosejs.com/docs/populate.html
const express = require('express');
const app = express();
app.use(express.json());


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

  const Schema = mongoose.Schema;
  
  const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });
  
  const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });
  
  const Story = mongoose.model('Story', storySchema);
  const Person = mongoose.model('Person', personSchema);
//=================================================
  // const author = new Person({
  //   _id: new mongoose.Types.ObjectId(),
  //   name: 'Ian Fleming2',
  //   age: 50,
  //   stories: []

  // });
  // console.log(author.name);

  // author.save(function (err) {
  //   if (err)
  //    return handleError(err);  

  //   const story1 = new Story({
  //     title: 'Casino Royale',
  //     author: author._id    // assign the _id from the person
  //   });    
  
  //   story1.save(function (err) {        
  //     if (err)
  //      return handleError(err);  
  //     console.log(story1.title+" author id: "+story1.author);  
     
  //   });
  // });

  // Person.create([
  //   {name:"fan1",age:20,_id:1},
  //   {name:"fan2",age:20,_id:2},
  //   {name:"fan3",age:20,_id:3},
  //   {name:"fan4",age:20,_id:4},
  //   {name:"fan5",age:20,_id:5},

  // ]) 
  Story.
    findOne({ title: 'Casino Royale' }).
    populate('author').
    exec(function (err, story) {
      if (err) return handleError(err);
      console.log('The author is %s', story.author.name);
      // prints "The author is Ian Fleming"
    });

    Person.
    find({ age:20 }).
    populate('stories').
    exec(function (err, author) {
      if (err) return handleError(err);
      for(i=0;i<author.length;i++){
        console.log('The author %s has %s',author[i].name,author[i].stories.length);
        for(j=0;j< author[i].stories.length;j++)
          console.log('The title %s',author[i].stories[j].title);

      }
            

      // prints "The author is Ian Fleming"
    });

app.listen(3000);