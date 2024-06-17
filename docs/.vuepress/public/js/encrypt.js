  function checkAnswers() {
    var answers1 = {
      q1A: document.querySelector('input[name="q1A"]').checked,
      q1B: document.querySelector('input[name="q1B"]').checked,
      q1C: document.querySelector('input[name="q1C"]').checked,
      q1D: document.querySelector('input[name="q1D"]').checked,
    };

    var selectedRadio = document.querySelector('input[name="q2"]:checked');
    var answers2 = {};
    if (selectedRadio) {
      answers2.q2 = selectedRadio.value;
    } else {
      answers2.q2 = "default";
    }

    var answers3 = {
      q3: document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : "default",
    };

    var answers4 = {
      q4: document.querySelector('input[name="q4"]:checked') ? document.querySelector('input[name="q4"]:checked').value : "default",
    };
    
    var answers5 = {
      q5: document.querySelector('input[name="q5"]:checked') ? document.querySelector('input[name="q5"]:checked').value : "default",
    };
    
    var answers6 = {
      q6: document.querySelector('input[name="q6"]:checked') ? document.querySelector('input[name="q6"]:checked').value : "default",
    };
    
    var answers7 = {
      q7: document.querySelector('input[name="q7"]:checked') ? document.querySelector('input[name="q7"]:checked').value : "default",
    };
    
    var answers8 = {
      q8: document.querySelector('input[name="q8"]:checked') ? document.querySelector('input[name="q8"]:checked').value : "default",
    };
    
    var answers9 = {
      q9: document.querySelector('input[name="q9"]:checked') ? document.querySelector('input[name="q9"]:checked').value : "default",
    };
    
    var answers10 = {
      q10: document.querySelector('input[name="q10"]:checked') ? document.querySelector('input[name="q10"]:checked').value : "default",
    };    

    var answers11 = {
      q11A: document.querySelector('input[name="q11A"]').checked,
      q11B: document.querySelector('input[name="q11B"]').checked,
      q11C: document.querySelector('input[name="q11C"]').checked,
    };

    // Check answers and calculate score
    var score = 0;

    // Question 1
    if (answers1.q1A && answers1.q1B && answers1.q1C && answers1.q1D) {
      score++;
    }

    // Question 2
    if (answers2.q2 === 'C') {
      score++;
    }

    // Question 3
    if (answers3.q3 === 'D') {
      score++;
    }

    // Question 4
    if (answers4.q4 === 'C') {
      score++;
    }

    // Question 5
    if (answers5.q5 === 'C') {
      score++;
    }

    // Question 6
    if (answers6.q6 === 'B') {
      score++;
    }

    // Question 7
    if (answers7.q7 === 'A') {
      score++;
    }

    // Question 8
    if (answers8.q8 === 'C') {
      score++;
    }

    // Question 9
    if (answers9.q9 === 'A') {
      score++;
    }

    // Question 10
    if (answers10.q10 === 'C') {
      score++;
    }

    // Question 11
    if (answers11.q11A && answers11.q11B && answers11.q11C) {
      score++;
    }

    // Display result
    var resultDiv = document.getElementById('result1');
    if (score === 11) {
      resultDiv.innerHTML = '恭喜，你答对了所有题目！服务器地址已复制到剪贴板：mc.paper-card.cn<br>祝你玩得高兴！<br>备用地址：7950x.paper-card.cn:25585';
      function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            console.log('文本成功复制到剪贴板');
        }).catch(function(err) {
            console.error('无法复制文本到剪贴板', err);
        });
    }
    var textToCopy = "mc.paper-card.cn";
    copyToClipboard(textToCopy);
      resultDiv.style.color = '#4caf50';
    } else {
      resultDiv.innerHTML = '有题目回答错误，请检查并重新提交！';
      resultDiv.style.color = '#f44336';
    }
  }
