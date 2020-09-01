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
  const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Abbas Al Aqqad',
    age: 60
  });
console.log(author.name);
  author.save(function (err) {
    if (err)
     return handleError(err);  

    const story1 = new Story({
      title: 'Abkaryat Mohamed',
      author: author._id    // assign the _id from the person
    });    
  
    story1.save(function (err) {        
      if (err)
       return handleError(err);  
      console.log(story1.title+" author id: "+story1.author);      
    });

    const story2 = new Story({
        title: 'Abkaryat Omar',
        author: author._id    // assign the _id from the person
      });    
    
      story2.save(function (err) {        
        if (err)
         return handleError(err);  
        console.log(story2.title+" author id: "+story2.author);      
      });

      const story3 = new Story({
        title: 'Abkaryat 3',
        author: author._id    // assign the _id from the person
      });    
    
      story3.save(function (err) {        
        if (err)
         return handleError(err);  
        console.log(story3.title+" author id: "+story3.author);      
      });

      const story4 = new Story({
        title: 'Abkaryat 4',
        author: author._id    // assign the _id from the person
      });    
    
      story4.save(function (err) {        
        if (err)
         return handleError(err);  
        console.log(story4.title+" author id: "+story4.author);      
      });

      const story5 = new Story({
        title: 'Abkaryat 5',
        author: author._id    // assign the _id from the person
      });    
    
      story5.save(function (err) {        
        if (err)
         return handleError(err);  
        console.log(story5.title+" author id: "+story5.author);      
      });
      
     author.stories = [story1,story2,story3,story4,story5]
     author.save(function (err) {
         if(err)
             return handleError(err);
        Person.
            find({ age:60 }).
            populate('stories').
            exec(function (err, author) {
            if (err) return handleError(err);
                for(i=0;i<author.length;i++){
                    console.log('The author %s has %s',author[i].name,author[i].stories.length);
                    for(j=0;j< author[i].stories.length;j++)
                    console.log('The title %s',author[i].stories[j].title);

                }
                //prints "The author is Ian Fleming"
            });
         
     })

  })

        // Story.
        // find().
        // populate('author').
        // exec(function (err, stories) {
        // if (err) return handleError(err);
        //     for(i=0;i<stories.length;i++){                
        //         console.log('The author is %s', stories[i].author.name);
        //         // prints "The author is Ian Fleming"
        //     }
        // });

       


  
app.listen(3000);