$(document).ready(function () {
	"use strict";
	window.data = [
		{
			"ques":"Every set is a ________ of itself?",
			"op1":"Improper Subset",
			"op2":"Proper Subset",
			"op3":"Both",
			"op4":"None of the above",
			"ans":"Improper Subset"
		},
		{
			"ques":"Conversion of 0.45 in % is?",
			"op1":"4.5%",
			"op2":"45%",
			"op3":"0.45%",
			"op4":"None of the above",
			"ans":"45%"
		},
		{
			"ques":"A manufacturer wants to earn 25% profit on a shirt that cost 100 dollars , he should charge?",
			"op1":"25 dollars ($25)",
			"op2":"150 dollars ($150)",
			"op3":"125 dollars ($125)",
			"op4":"100 dollars ($100)",
			"ans":"125 dollars ($125)"
		},
		{
			"ques":"1% of 1000 metre is ?",
			"op1":"1 metre",
			"op2":"10 metre",
			"op3":"100 metre",
			"op4":"1000 metre",
			"ans":"10 metre"
		},
		{
			"ques":"Conversion of 0.33 in % is?",
			"op1":"33 percent (33 %)",
			"op2":"333 percent (333 %)",
			"op3":"33.33 percent (33.33 %)",
			"op4":"3.3 percent (3.3 %)",
			"ans":"33 percent (33 %)"
		},
		{
			"ques":"What smallest number should be added to 8444 such that the sum is completely divisible by 7 ?",
			"op1":"5",
			"op2":"4",
			"op3":"6",
			"op4":"3",
			"ans":"5"
		},
		{
			"ques":"If a whole number n is divided by 4, we will get 3 as remainder. What will be the remainder if 2n is divided by 4 ?",
			"op1":"6",
			"op2":"4",
			"op3":"2",
			"op4":"1",
			"ans":"2"
		},
		{
			"ques":"Which one of the following is not a prime number ?",
			"op1":"61",
			"op2":"31",
			"op3":"91",
			"op4":"71",
			"ans":"91"
		},
		{
			"ques":"Perimeter of shapes is 20, which will have largest area?",
			"op1":"Square",
			"op2":"Rectangle",
			"op3":"Circle",
			"op4":"All will be same",
			"ans":"Circle"
		},
		{
			"ques":"Which month has the highest percentage of births?",
			"op1":"January",
			"op2":"October",
			"op3":"August",
			"op4":"July",
			"ans":"August"
		},
		{
			"ques":"Which animal can see both ultraviolet and infrared light?",
			"op1":"Giraffe",
			"op2":"Monkeys",
			"op3":"Starfish",
			"op4":"Goldfish",
			"ans":"Goldfish"
		},
		{
			"ques":"A person who is pretending to be somebody he is not is called as?",
			"op1":"Imposter",
			"op2":"Magician",
			"op3":"Liar",
			"op4":"Rogue",
			"ans":"Imposter"
		},
		{
			"ques":"The study of ancient societies is called as?",
			"op1":"History",
			"op2":"Archaeology",
			"op3":"Ethnology",
			"op4":"Anthropology",
			"ans":"Archaeology"
		},
		{
			"ques":"Teetotaller means what?",
			"op1":"One who abstains from theft",
			"op2":"One who abstains from meat",
			"op3":"One who abstains from malice",
			"op4":"One who abstains from taking wine",
			"ans":"One who abstains from taking wine"
		},
		{
			"ques":"A person of good understanding knowledge and reasoning power is called as?",
			"op1":"Literate",
			"op2":"Snob",
			"op3":"Intellectual",
			"op4":"Expert",
			"ans":"Intellectual"
		},
		{
			"ques":"A person who knows many foreign languages is called as?",
			"op1":"Grammarian",
			"op2":"Linguist",
			"op3":"Bilingual",
			"op4":"Polyglot",
			"ans":"Linguist"
		},
		{
			"ques":"State in which the few govern the many is called as?",
			"op1":"Plutocracy",
			"op2":"Monarchy",
			"op3":"Oligarchy",
			"op4":"Autocracy",
			"ans":"Oligarchy"
		},
		{
			"ques":"Which force tends to move away from the centre or axis?",
			"op1":"Centripetal",
			"op2":"Axiomatic",
			"op3":"Awry",
			"op4":"Centrifugal",
			"ans":"Centrifugal"
		},
		{
			"ques":"A C B in mathematics is read as?",
			"op1":"A is a proper subset of B",
			"op2":"A is less than B",
			"op3":"A is a subset of B",
			"op4":"B is a subset of A",
			"ans":"A is a proper subset of B"
		},
		{
			"ques":"Pick out the scalar quantity.",
			"op1":"force",
			"op2":"pressure",
			"op3":"velocity",
			"op4":"acceleration",
			"ans":"pressure"
		}
	];
	window.data2 = [
		{
		"ques":"Who discoved one of the first antibiotics: penicillin ?",
		"op1":"Alexander Shepard",
		"op2":"Alexander Gosling",
		"op3":"Alexander Fleming",
		"op4":"Alexander Wang",
		"ans":"Alexander Fleming"
		},
		{
		"ques":"What does the abbreviation SMS mean?",
		"op1":"Simple Message Service",
		"op2":"Short Message Service",
		"op3":"Send Message Service",
		"op4":"Simple Message Store",
		"ans":"Short Message Service"
		},
		{
		"ques":"What is the singular of Scampi ?",
		"op1":"Scampa",
		"op2":"Scamp",
		"op3":"Scampo",
		"op4":"Scampe",
		"ans":"Scampo"
		},
		{
		"ques":"What does the abbreviation GPS mean?",
		"op1":"Global Positioning Service",
		"op2":"Google Positioning System",
		"op3":"Google Positioning Service",
		"op4":"Global Positioning System",
		"ans":"Global Positioning System"
		},
		{
		"ques":"The great Victoria Desert is located in",
		"op1":"Canada",
		"op2":"West Africa",
		"op3":"Australia",
		"op4":"North America",
		"ans":"Australia"
		},
		{
		"ques":"The intersecting lines drawn on maps and globes are",
		"op1":"latitudes",
		"op2":"longitudes",
		"op3":"geographic grids",
		"op4":"None of the above",
		"ans":"geographic grids"
		},
		{
		"ques":"It is an uphill task but you will have to do it” means...?",
		"op1":"It is very difficult task but you have to do it",
		"op2":"The work is above the hill and you will have to do it",
		"op3":"It is a very easy task but you must do it",
		"op4":"This work is not reserved for you but you will have to do it",
		"ans":"It is very difficult task but you have to do it"
		},
		{
		"ques":"According to Oxford Dictionary the longest word in English consists of how many letters?",
		"op1":"31 letters",
		"op2":"29 letters",
		"op3":"45 letters",
		"op4":"19 letters",
		"ans":"45 letters"
		},
		{
		"ques":"Who was the first man to fly around the earth with a spaceship?",
		"op1":"Letty",
		"op2":"Gagarin",
		"op3":"Robert",
		"op4":"Alan",
		"ans":"Gagarin"
		},
		{
		"ques":"Which unit indicates the light intensity?",
		"op1":"Balmer",
		"op2":"Meu",
		"op3":"Weber",
		"op4":"Candela",
		"ans":"Candela"
		},
		{
		"ques":"Sobha’s father was 38 years of age when she was born while her mother was 36 years old when her brother four years younger to her was born. What is the difference between the ages of her parents?",
		"op1":"5 years",
		"op2":"6 years",
		"op3":"3 years",
		"op4":"4 years",
		"ans":"6 years"
		},
		{
		"ques":"A person who is not sure of the existence of god is called as?",
		"op1":"Cynic",
		"op2":"Atheist",
		"op3":"Agnostic",
		"op4":"Theist",
		"ans":"Agnostic"
		},
		{
		"ques":"A child who is born after death of his father is called as?",
		"op1":"Posthumous",
		"op2":"Orphan",
		"op3":"Bastard",
		"op4":"Progenitor",
		"ans":"Posthumous"
		},
		{
		"ques":"Medical study of skin and its diseases",
		"op1":"Orthopaedics",
		"op2":"Endocrinology",
		"op3":"Gynealogy",
		"op4":"Dermatology",
		"ans":"Dermatology"
		},
		{
		"ques":"The groundwater can become confined between two impermeable layers. This type of enclosed water is called?",
		"op1":"artesian",
		"op2":"artesian well",
		"op3":"unconfined groundwater",
		"op4":"confined groundwater",
		"ans":"artesian"
		},
		{
		"ques":"The least explosive type of volcano is called?",
		"op1":"Basalt plateau",
		"op2":"Cinder cone",
		"op3":"Shield volcanoes",
		"op4":"Composite volcanoes",
		"ans":"Basalt plateau"
		},
		{
		"ques":"The largest fish exporting region in the world is...?",
		"op1":"the north-east atlantic region",
		"op2":"the north-east pacific region",
		"op3":"the north-west pacific region",
		"op4":"the south-east asian region",
		"ans":"the north-east atlantic region"
		},
		{
		"ques":"The length of the day is determined in",
		"op1":"solar terms",
		"op2":"length of the hours",
		"op3":"astronomical units",
		"op4":"None of the above",
		"ans":"astronomical units"
		},
		{
		"ques":"The hot, dry wind on the east or leeward side of the Rocky mountains (North America) is called?",
		"op1":"the Harmattan",
		"op2":"the Loo",
		"op3":"the Sirocco",
		"op4":"the Chinook",
		"ans":"the Chinook"
		},
		{
		"ques":"Who invented the BALLPOINT PEN?",
		"op1":"Write Brothers",
		"op2":"Waterman Brothers",
		"op3":"Biro Brothers",
		"op4":"Bicc Brothers",
		"ans":"Biro Brothers"
		}
	];
	var dataArray = [];
	var trueAnswers = [];
	var questionEnabledMode = false;
	var selectedOptions = {};
	// window.alert(JSON.stringify(data.Ques1));

	//Defining Class
	var MyQues = function (mydata) {
		this.ques = mydata.ques;
		this.op1 = mydata.op1;
		this.op2= mydata.op2;
		this.op3 = mydata.op3;
		this.op4 = mydata.op4;
		this.ans = mydata.ans;
	}

	//My Ques Functions
	MyQues.prototype.display = function(){
		$("#head").text(this.ques);
		$("#id-op1").text(this.op1);
		$("#id-op2").text(this.op2);
		$("#id-op3").text(this.op3);
		$("#id-op4").text(this.op4);
	}
	MyQues.prototype.getCorrectIndex = function() {
		var ind = 0;
		if(this.ans == this.op1) 
			return 0;
		if(this.ans == this.op2) 
			return 1;
		if(this.ans == this.op3) 
			return 2;
		if(this.ans == this.op4) 
			return 3;

	};

	//Generate Random Numbers
	function generateRandom()
	{
		var temp = 0;
		for(var i=0;i<10;)
		{
			temp = Math.floor(Math.random() * 19) + 0;
			if(!randomNumbers.includes(temp))
			{
				randomNumbers[i] = temp;
				i++;
			}
		}
	}

	//Go To Next function
	function goToNext() {
		if (!questionEnabledMode) {
			$(".radioButton").attr("disabled",true);
		}
		$(".radioButton").parent().removeClass("answer");
		$(".radioButton").parent().removeClass("wrong");
			
		if(questionEnabledMode)
		{
			//Check Result and Put it in array.
			if($(".radioButton:checked").next().text() == questions[index-1].ans)
			{
				trueAnswers.push(index-1);
			}
			if(index>0){
				selectedOptions[index-1] = $(".radioButton:checked").data("index");
			}
		}

		questions[index].display();
		
		//Refresh radio buttons
		$(".radioButton").prop('checked', false);

		if (!questionEnabledMode) {
			$(".radioButton[data-index='"+selectedOptions[index]+"']").prop("checked",true);
			$(".radioButton[data-index='"+questions[index].getCorrectIndex()+"']").parent().addClass("answer");
			if (selectedOptions[index] != questions[index].getCorrectIndex()) {
				$(".radioButton[data-index='"+selectedOptions[index]+"']").parent().addClass("wrong");
			}
		}
		index++;
		if(index == 10)
		{
			$("#btnNext").addClass("hide");
			$("#btnFinish").removeClass("hide");
		}
	}

	//Show first question
	function showFirstQuestion() {
		index=0;
		questions[index].display();
		index++;
	}

	//Go To Result
	function goToResult () {
		if(questionEnabledMode)
		{
			//Check Result and Put it in array.
			if($(".radioButton:checked").next().text() == questions[index-1].ans)
			{
				trueAnswers.push(index-1);
			}
			if(index>0){
				selectedOptions[index-1] = $(".radioButton:checked").data("index");
			}
		}
		$(".ques-background").addClass("hide");
		$(".result-background").removeClass("hide");
		$("#correctCount").html(trueAnswers.length);
		var result;
		if(trueAnswers.length >= 8)
		{
			result = "Congratulations "+name+" ! you have successfully cleared the General IQ test on a "+levelName+"level. You are a Genius. Keep it Up. ;)"
		}
		else
		{
			result = "Sorry "+name+" ! you have failed to clear General IQ test. Better luck next time."
		}
		$("#message").text(result);
	}

	//Show answers
	function showAnswers(){
		$(".main-background").addClass("hide");
		$(".result-background").addClass("hide");
		$(".ques-background").removeClass("hide");
		$("#btnNext").removeClass("hide");
		$("#btnFinish").addClass("hide");

		questionEnabledMode = false;
		index = 0;
		goToNext();
	}

	var randomNumbers = [];
	generateRandom();

	//Creating Object.
	var questions = [];
	var index = 0;
	

	//Events
	$('#quesTable tr').click(function() {
		if (!questionEnabledMode) {
			return;
		}
    	$(this).find('td input[type=radio]').prop('checked', true);
	});
	$("#btnNext").click(goToNext);
	$("#btnFinish").click(goToResult);
	var launchQuiz = function(){
		var level = $(this).data("level");
		var levelName = level == data ? "easy" : "difficult";
		for(var i = 0;i<10;i++)
		{
			questions[i] = new MyQues(window[level][randomNumbers[i]]);
		}
		$(".main-background").addClass("hide");
		$(".result-background").addClass("hide");
		$(".ques-background").removeClass("hide");
		questionEnabledMode = true;
		showFirstQuestion();
		$("#quizModal").modal('hide');
	}
	var name;
	$("#easyQuizBtn").click(launchQuiz);
	$("#difficultQuizBtn").click(launchQuiz);
	$("#btnPlay").click(function () {
		name = $("#fname").val()+" "+$("#lname").val();
		var inputs = $("#reg-form .form-control");
		var isValid = true;
		inputs.css('box-shadow', '');
		inputs.parent().next().addClass("hide");
		$.each(inputs,function (i,input) {
			if(!input.checkValidity())
			{
				isValid = false;
				$(input).css('box-shadow', '0px 0px 20px 4px red');
				$(input).parent().next().removeClass("hide");
			}
		})
		if (isValid) {
			inputs.css('box-shadow', '');
			inputs.parent().next().addClass("hide");
			$("#quizModal").modal();
		}
	})
	$("#btnPlay1").click(function () {
		name = $("#name").val();
		var inputs = $("#reg-form2 .form-control");
		var isValid = true;
		inputs.parent().next().addClass("hide");
		inputs.css('box-shadow', '');
		$.each(inputs,function (i,input) {
			if(!input.checkValidity())
			{
				isValid = false;
				$(input).css('box-shadow', '0px 0px 20px 4px red');
				$(input).parent().next().removeClass("hide");
			}
		})
		if (isValid) {
			inputs.css('box-shadow', '');
			inputs.parent().next().addClass("hide");
			$("#quizModal").modal();
		}
	});
	$("#showAnswers").click(showAnswers);
});