class Student {
    #answers;
    #studentId;
    constructor(studentId) {
        this.#studentId = studentId;
        this.#answers = [];
    }

    get sid() {
        return this.#studentId;
    }

    addAnswer(question) {
        this.#answers.push(question)
    }

    get studentAnswers() {
        return this.#answers;
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer) {
        if (this.answer == answer) {
            return true;
        }
        return false;
    }
}

class Quiz {
    #questions;
    #students
    constructor(questions, students) {
        
        this.#questions = new Map();
        questions.forEach(element => {
            this.#questions.set(element.qid,element.answer);
        });
        this.#students = students;
    }

    scoreStudentBySid(sid) {
        let student = this.#students.find(s => s.sid == sid);
        if (!student) {
            console.log("student not found");
        }
        return student.studentAnswers
        .map(question => {
            return question.checkAnswer(this.#questions.get(question.qid)) ? 1 : 0
        }).reduce((e1,e2)=> e1 + e2);

    }

    getAverageScore() {
        if (this.#students.length == 0) {
            return 0;
        }
        return this.#students
        .map(s => this.scoreStudentBySid(s.sid))
        .reduce((e1,e2) => e1 + e2)/this.#students.length
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2,"a"));
student1.addAnswer(new Question(3,"b"));
student1.addAnswer(new Question(1,"b"));

const student2 = new Student(11);
student2.addAnswer(new Question(3,"b"));
student2.addAnswer(new Question(2,"a"));
student2.addAnswer(new Question(1,"d"));

const students = [student1, student2];

const questions = [new Question(1,"b"), new Question(2,"a"), new Question(3,"b")]
const quiz = new Quiz(questions,students);
let scoreForStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreForStudent10);
let scoreForStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreForStudent11);
let average = quiz.getAverageScore();
console.log(average);