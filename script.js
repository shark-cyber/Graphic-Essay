var reasons=[
  "In The Secret Garden by Frances Hodgson Burnett, Mary’s inquisitive mind helps to develop the themes of curiosity.",
  'Mary is curious about the content in the garden. “Are there rose-trees... I should like to see them…Where is the green door? There must be a door somewhere”'+"(Burnett 53).",
  "Mary believes that a door should be somewhere. Which indicates she will go looking for the hidden door. She keeps asking all the workers at the manor to learn information about where the Secret Garden was and how it got locked up. She also tried searching the kitchen’s gardens often searching for the door. The author shares the theme curiosity by showing that she ended up talking and thinking about the Secret Garden non-stop.",
  
 'Mary is constantly thinking about the hundred rooms, “but to hear of it brought back to her mind the hundred rooms with closed doors. She wondered if they were all really locked and what she would find if she could get into any of them”'+"(Burnett 69).",
  
  "She heard about the hundred rooms and was curious what was in all of them. She developed the personality of curiosity and implemented her inquisitive mind to finding the hidden treasures through the hundred rooms. The author shares the theme of curiosity by showing the actions Mary does in order to get to the point of meeting Mrs Medlock in the hallway.",
  "In The Secret Garden by Frances Hodgson Burnett, the character of Mary’s changing personality helps to develop the theme of determination.",
  
  'Colin is trying to make Mary show sympathy, "Im not as selfish as you, because I am always ill, and I am sure there is a lump coming on my back… And I am going to die besides...I do not believe it... You just say that to make people sorry. I believe you are proud of it. I do not believe it! If you were a nice boy it might be true—but you are too nasty"'+"(Burnett 213).",
  "Colin keeps saying that he is going to die and he is starting to believe it. He is trying to convince Mary that he is dying. Mary is trying to convey that he just wants sympathy. She is try to pass determination to make him mentally get healthier in order to get physically healthier. The theme of determination shows how Colin thinks hard to change his mind set.",
  'Mrs.Sowerby sent a letter to Mr.Craven, “It was about Miss Mary I spoke. I will make bold to speak again. Please, sir, I would come home if I was you. I think you would be glad to come and—if you will excuse me, sir—I think your lady would ask you to come if she was here”'+"(Burnett 362).",
  "Master Craven thought of Mary which made him think of his wife. The thought of Mary was what changed Mr.Craven’s personality for good and he finally started loving his son. The theme of determination shows how Mary instilled thoughts into Mr.Craven causing him to rethink his behavior and actions."
  
  
];
var images=[
  "https://static.bhphotovideo.com/explora/sites/default/files/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg",
  "https://th.bing.com/th/id/OIP.Bou5d-MlLJ54FpsSZMGOkwHaEK?pid=ImgDet&rs=1",
  "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2018/11/thesun.jpg?mw=600",
   "https://cdn.editage.com/insights/editagecom/production/styles/detail_page_image/public/Interaction%20between%20magnetic%20fields%20of%20Earth%20and%20sun%20observed%20%28Resized%29.jpg?itok=ukbQ-Ecm",
  "https://i.ytimg.com/vi/OPKwzNPtQQg/maxresdefault.jpg"
];
var types=["Topic Sentence 1","Text Evedince 1","Commentary 1","Text evedince 2","Commentary 2", "Topic Sentence 2","Text Evedince 1","Commentary 1","Text evedince 2","Commentary 2", ];
var i=0
function nextslide(){
  document.getElementById("reason").innerHTML=reasons[i];
  document.getElementById("type").innerHTML=types[i];
 document.getElementById("Album").src=images[i];
 document.getElementById("audio").play()
  ;i++
  if(i==10)
  {i=0;}
} 
