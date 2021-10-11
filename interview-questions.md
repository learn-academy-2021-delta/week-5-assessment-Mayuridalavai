# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: In Learn bootcamp when we have Ruby methods class there we discussed about the ruby methods most of ruby methods are accessors 

  Researched answer: When I researched I learned that ruby methods are all accessors 
  means they do not mutate objects they called on and for method to permanently change the object called on using bang operator
 exp: num =[1,2,3,5]
 num.reverse => [5,3,2,1]
 num => [1,2,3,5]
 num.reverse! => [5,3,2,1] used bang operator'!'
 num => [5,3,2,1] permanantly changed



2. What is a block in Ruby?

  Your answer: I learned the word blocks in ruby blocks and loops method and wrote many programs with do and end commands in loops like javascript curly braces{}

  Researched answer: when I researched about blocks I learned that blocks are anonymous functions just like javascript and blocks are code that is passed to a method.Blocks can be created with do/end keywords 
  exp: my_num = 3 => 3
  my_num.times do
  puts 'hello'
  end
  =>hello
    hello
    hello 
  =>3



3. What is a gem?

  Your answer: I heard gem in  testing ruby rspec class there we install a package for testing the ruby code like 'gem install rspec', it is a package for ruby

  Researched answer: In reasearch I learned that gem is open source library that contain Ruby code and are Package with a little data and gem command is used to build,upload,download and install gem packages



4. What is a relational database? Are there other kinds of databases?

  Your answer: When I was in Database class I learned that relational databases are like tables of rows and columns like excel sheets i think there are no other databases

  Researched answer: when I researched I learned that relational database is almost exactly like an excel spreadsheet or google sheet documnet with data dispalyed in rows and columns. A database can have many tables that have relationships to each other
  There are 3 more kinds of databases 
  1.NoSQL database
  2.Cloud database
  3.Columnar database



5. What are primary keys? Why are they important?

  Your answer: In Introduction of Databases class my Instructor told that primary keys that are row names which are unique 

  Researched answer: In research I learned that Every row of table has a primary key named "id", and that ID is guaranteed to be unique. This keys prevents problems like two Person instances being confused for each other because they have the same name so, We can always tell them apart by their ID 
  
  

## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: Rest stands for "Representational State Transfer" it is a software architecture style and guideline to create scalable web services

2. JSON: JSON is short form for Javascript Object Notation.it is the simplest and easiest way to transfer data using the internet which makes the language extremely popular od APIs,enabling developers to work multiple languages

3. ERB: ERB refers Embedded Ruby which is template engine in which Ruby language embeds into HTML.

4. Params: It is a method that returns ActionContoller::Parameters object, In practice it behaves a lot like hash

5. API: API is Application Programming Interface is a broad term refers to one form or another of allowing components to communicate with each other
