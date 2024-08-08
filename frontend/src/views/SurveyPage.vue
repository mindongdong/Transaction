<template>
    <div class="layout">
        <div class="gameboy" id="GameBoy">

            <div class="screen-area">

                <div class="power">
                    <div class="indicator">
                        <div class="led"></div>
                        <span class="arc" style="z-index:2"></span>
                        <span class="arc" style="z-index:1"></span>
                        <span class="arc" style="z-index:0"></span>
                    </div>
                    POWER
                </div>

                <div class="display" id="mainCanvas">
                    <div class="question" v-if="currentQuestionIndex < questions.length">
                        <p>{{ questions[currentQuestionIndex].text }}</p>
                        <div class="answers">
                            <label class="custom-radio">
                                <input type="radio" name="answer" :value="questions[currentQuestionIndex].answer1"
                                    @change="selectAnswer(questions[currentQuestionIndex].answer1)" />
                                <span :class="['radio-label', { 'hover-enabled': isHoverEnabledFirstButton }]">
                                    <img src="@/assets/button1.png" alt="icon" class="answer-icon" />
                                    {{ questions[currentQuestionIndex].answer1 }}
                                </span>
                            </label>
                            <label class="custom-radio">
                                <input type="radio" name="answer" :value="questions[currentQuestionIndex].answer2"
                                    @change="selectAnswer(questions[currentQuestionIndex].answer2)" />
                                <span :class="['radio-label', { 'hover-enabled': isHoverEnabledSecondButton }]">
                                    <img src="@/assets/button2.png" alt="icon" class="answer-icon" />
                                    {{ questions[currentQuestionIndex].answer2 }}
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="question" v-else>
                        <h2 v-if="result === ''"></h2>
                        <p v-if="result !== ''">{{ result }}</p>
                        <div class="next-label" @click="submitSurvey">메인 페이지 ></div>
                    </div>
                </div>

                <div class="label">
                    <div class="title">GAME BOY</div>
                    <div class="subtitle">
                        <span class="c">C</span><!--
     --><span class="o1">O</span><!--
     --><span class="l">L</span><!--
     --><span class="o2">O</span><!--
     --><span class="r">R</span>
                    </div>
                </div>

            </div>
        </div>

        <div class="wrapper">

            <!-- LEFT -->
            <div class="joy_left_wrapper">

                <div class="mid_left"></div>
                <div class="mid_right"></div>
                <div class="bott_left"></div>

                <div class="cover" @click="handleAnswerSelection('answer1')" @mouseover="enableHoverFirstButton"
                    @mouseleave="disableHoverfirstButton">
                    <div class="controll"></div>
                </div>
            </div>

            <!-- RIGHT -->
            <div class="joy_right_wrapper">
                <div class="mid_left"></div>
                <div class="mid_right"></div>
                <div class="bott_left"></div>

                <div class="cover" @click="handleAnswerSelection('answer2')" @mouseover="enableHoverSecondButton"
                    @mouseleave="disableHoverSecondButton">
                    <div class="button_grp1"></div>
                    <div class="button_grp2"></div>
                </div>
            </div>

            <div class="joy_midd_wrapper"></div>



        </div>

        <div class="wire"></div>

        <h1 class="info">
            <div class="left"></div>
            <div class="right"></div>
        </h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questions: [
                { text: "Q1. 보통 어디에서 게임을 즐겨?", answer1: "A1. 집에서 편하게", answer2: "A2. PC방에서 친구들과" },
                { text: "Q2. 게임할 때 주로 어떤 스타일이야?", answer1: "A1. 혼자 조용히", answer2: "A2. 함께 즐겁게" },
                { text: "Q3. 친구가 게임하자고 연락 왔어! 어떻게 할래?", answer1: "A1. 통화하며 함께", answer2: "A2. 만나서 같이" },
                { text: "Q4. 게임 스토리 중요하다고 생각해?", answer1: "A1. 응, 중요해", answer2: "A2. 아니, 별로야" },
                { text: "Q5. 하려던 게임이 점검 중이야! 어떻게 할래?", answer1: "A1. 나중에 하지 뭐", answer2: "A2. 끝날 때까지 기다릴래" },
                { text: "Q6. 상인 NPC를 만났어! 어떻게 반응할래?", answer1: "A1. 필요한 것만 빨리 사", answer2: "A2. NPC 이야기도 궁금해" },
                { text: "Q7. 게임 속에서 친구가 위기에 처했어! 어떻게 할래?", answer1: "A1. 어쩔 수 없이 도망가", answer2: "A2. 친구를 구해" },
                { text: "Q8. 친구가 '흙'이라는 아이템을 줬어. 어떻게 생각해?", answer1: "A1. 필요 없으니 버려", answer2: "A2. 고마워" },
                { text: "Q9. 다람쥐를 잡으면 보상을 준대! 어떻게 할래?", answer1: "A1. 어디 있는지 바로 찾으러 가", answer2: "A2. 귀여워서 못 잡겠어" },
                { text: "Q10. 퀘스트를 할 때 어떻게 해?", answer1: "A1. 눈에 띄는 것부터 해", answer2: "A2. 동선 고려해서 효율적으로" },
                { text: "Q11. 게임할 시간을 지켜?", answer1: "A1. 응, 꼭 지켜", answer2: "A2. 아니, 가끔 넘겨" },
                { text: "Q12. 나중에 게임을 만든다면 어떤 게임을 만들고 싶어?", answer1: "A1. 힐링되는 게임", answer2: "A2. 전략적인 게임" },
            ],
            currentQuestionIndex: 0,
            responses: [],
            result: '',
            isHoverEnabledFirstButton: false,
            isHoverEnabledSecondButton: false,
        };
    },
    watch: {
        currentQuestionIndex(newIndex) {
            if (newIndex === this.questions.length) {
                this.calculateResult();
            }
        },
    },
    methods: {
        // router로 /main으로 이동
        submitSurvey() {
            // 초기화
            this.currentQuestionIndex = 0;
            this.responses = [];
            this.result = '';

            this.$router.push('/main');
        },
        selectAnswer(answer) {
            this.responses.push(answer);
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
            } else {
                this.currentQuestionIndex++;
                // Survey completed, handle it here
            }
        },
        handleAnswerSelection(answer) {
            this.responses.push(answer);
            this.currentQuestionIndex++;
        },
        enableHoverFirstButton() {
            this.isHoverEnabledFirstButton = true;
        },
        disableHoverfirstButton() {
            this.isHoverEnabledFirstButton = false;
        },
        enableHoverSecondButton() {
            this.isHoverEnabledSecondButton = true;
        },
        disableHoverSecondButton() {
            this.isHoverEnabledSecondButton = false;
        },
        calculateResult() {
            const scores = {
                E: 0,
                I: 0,
                S: 0,
                N: 0,
                T: 0,
                F: 0,
                J: 0,
                P: 0,
            };

            const responseScores = [
                { Answer1: { I: 1 }, Answer2: { E: 1 } }, // Q1
                { Answer1: { I: 1 }, Answer2: { E: 1 } }, // Q2
                { Answer1: { I: 1 }, Answer2: { E: 1 } }, // Q3
                { Answer1: { N: 1 }, Answer2: { S: 1 } }, // Q4
                { Answer1: { P: 1 }, Answer2: { J: 1 } }, // Q5
                { Answer1: { S: 1 }, Answer2: { N: 1 } }, // Q6
                { Answer1: { T: 1 }, Answer2: { F: 1 } }, // Q7
                { Answer1: { T: 1 }, Answer2: { F: 1 } }, // Q8
                { Answer1: { S: 1 }, Answer2: { F: 1 } }, // Q9
                { Answer1: { P: 1 }, Answer2: { J: 1 } }, // Q10
                { Answer1: { J: 1 }, Answer2: { P: 1 } }, // Q11
                { Answer1: { F: 1 }, Answer2: { T: 1 } }, // Q12
            ];

            this.responses.forEach((response, index) => {
                const questionScore = responseScores[index][response];
                for (const key in questionScore) {
                    scores[key] += questionScore[key];
                }
            });

            const resultTypes = [
                scores.E >= scores.I ? 'E' : 'I',
                scores.S >= scores.N ? 'S' : 'N',
                scores.T >= scores.F ? 'T' : 'F',
                scores.J >= scores.P ? 'J' : 'P',
            ];

            const resultText = {
                ENFP: '활발한 멀티플레이어로, 창의적이고 감정적으로 몰입하는 플레이어. 친구와 협력하며 스토리와 세계관을 중요시 여김.',
                ENTP: '전략적이고 창의적인 플레이를 즐기는 멀티플레이어로, 다양한 도전을 시도하며 친구와 함께 혁신적인 방법으로 게임을 해결함.',
                ENFJ: '타인과의 협력을 중시하며, 감정적으로 몰입하는 플레이어. 협동과 소통을 통해 게임을 즐김.',
                ENTJ: '목표 지향적이고 전략적인 플레이어로, 효율적으로 게임을 이끌고 도전을 즐김.',
                ESFP: '사교적이고 즐거움을 추구하는 플레이어로, 친구들과 함께 게임의 재미를 추구함.',
                ESFJ: '타인과의 관계를 중요시하며, 협력과 감정적인 몰입을 통해 게임을 즐기는 플레이어.',
                ESTP: '즉흥적이고 활동적인 플레이어로, 빠르게 상황에 적응하며 게임을 즐김.',
                ESTJ: '논리적이고 체계적인 플레이를 중시하며, 목표를 달성하기 위해 효율적으로 게임을 진행함.',
                INFP: '창의적이고 감정적으로 몰입하는 솔로 플레이어로, 스토리와 캐릭터의 감정선을 중시함.',
                INTP: '논리적이고 창의적인 솔로 플레이어로, 복잡한 문제 해결과 전략적 플레이를 선호함.',
                INFJ: '깊이 있는 스토리와 감정을 중시하며, 혼자서도 몰입하는 플레이를 즐기는 플레이어.',
                INTJ: '체계적이고 전략적인 솔로 플레이어로, 목표 달성에 집중하며 게임을 즐김.',
                ISFP: '감정적으로 몰입하며, 혼자서도 게임의 재미를 느끼는 플레이어. 스토리와 캐릭터의 감정선을 중요시함.',
                ISFJ: '혼자서도 관계와 감정을 중시하며 게임을 즐기는 플레이어로, 스토리와 캐릭터의 감정선을 중요하게 생각함.',
                ISTP: '즉흥적이고 논리적인 솔로 플레이어로, 빠르게 상황에 적응하며 게임을 즐김.',
                ISTJ: '혼자서 체계적으로 게임을 즐기는 플레이어로, 현실적이고 논리적인 목표를 설정하고 달성하는 것을 선호함.',
            };

            this.result = resultText[resultTypes.join('')];
        },
    },
}
</script>

<style lang="scss" scoped>
.layout {
    background-color: #19A3FF;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/test_v5.png');
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
}

.question,
.answers,
.answers label {
    font-family: 'NeoDunggeunmo';
    font-size: 2.5rem;
    color: #000000;
}

.question {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.question h2 {
    margin-bottom: 1rem;
}

.question p {
    margin-bottom: 1rem;
}

.answers {
    display: flex;
    flex-direction: column;
}

.answers label {
    margin-bottom: 5px;
}

.answers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.custom-radio {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

input[type="radio"] {
    display: none;
}

.next-label {
    width: 10rem;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.next-label:hover {
    background-color: #0056b3;
}

.radio-label {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.radio-label:hover,
.hover-enabled {
    background-color: #0056b3;
}

input[type="radio"]:checked+.radio-label {
    background-color: #0056b3;
}

.answer-icon {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
}

.gameboy {
    position: absolute;
    top: 3rem;
    width: 1200px;
    height: 500px;
    border-radius: 20px;
    padding: 20px;
    background-color: #4f50db;
    box-shadow: 0px -5px 0px #0d0e51, 0px 5px 0px #3d38b5;
    font-family: sans-serif;
    -webkit-user-select: none;
    cursor: default;

    /*
  &::before {
    content:'';
    display:block;
    position:absolute;
    top:calc(100% - 200px);
    left:20%;
    width:60%;
    height:150px;
    border-radius:20px;
    background-color:#4f50db;
    box-shadow:0px 50px 200px #aaa;
    z-index:1;
  }*/
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: calc(100% - 34px);
        left: 5px;
        width: calc(100% - 10px);
        height: 50px;
        border-radius: 50%;
        background-color: #4f50db;
        box-shadow: 0px 5px 0px #3d38b5;
        border-bottom: 2px solid #9998eb;
    }

    .screen-area {
        position: relative;
        padding: 35px 50px 5px 50px;
        border-radius: 15px 15px 15px 15px;
        background-color: #23252d;
        color: #67879a;
        box-shadow: 0px 2px 0px black, 0px -2px 0px black, -2px 0px 0px black, 2px 0px 0px black;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: calc(100% - 20px);
            left: 5px;
            width: calc(100% - 10px);
            height: 30px;
            border-radius: 50%;
            background-color: #23252d;
            box-shadow: 0px 2px 0px black;
        }

        .power {
            position: absolute;
            display: block;
            width: 50px;
            left: 0px;
            top: 80px;
            font-size: 10px;
            letter-spacing: -0.5px;
            text-align: center;

            .indicator {
                line-height: 14px;

                .led {
                    position: relative;
                    display: inline-block;
                    background-color: #ca1a21;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    box-shadow: 0px 0px 10px #ff552e;
                    z-index: 5;
                }

                .arc {
                    position: relative;
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    margin-left: -2px;

                    &::before {
                        position: absolute;
                        left: 3px;
                        content: '';
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: #67879a;
                    }

                    &::after {
                        position: absolute;
                        left: 0px;
                        content: '';
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: #23252d;
                    }
                }
            }
        }

        .display {
            background-color: #929d97;
            height: 350px;
            width: 1050px;
            border-radius: 3px;
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-family: 'NeoDunggeunmo';
                font-size: 2rem;
                color: #000000;
            }
        }

        .label {
            position: relative;
            text-align: center;
            font-size: 20px;
            z-index: 5;

            .title {
                display: inline;
                font-weight: bold;
                font-style: italic;
            }

            .subtitle {
                display: inline;
                font-family: "Comic Sans MS";
                font-weight: bold;
                font-size: 22px;
                letter-spacing: -1px;

                .c,
                .o1,
                .l,
                .o2,
                .r {
                    display: inline-block;
                }

                .c {
                    color: #aa2058;
                }

                .o1 {
                    color: #605bd9;
                    font-size: 20px;
                }

                .l {
                    color: #78b930;
                    transform: rotateZ(-10deg);
                }

                .o2 {
                    color: #b6b524;
                    font-size: 20px;
                }

                .r {
                    color: #317aaf;
                }
            }
        }
    }

    .nintendo {
        padding: 0px 5px;
        width: 82px;
        color: #3436bf;
        font-weight: bold;
        text-align: center;
        margin: 0 auto;
        border: 2px solid #3436bf;
        border-radius: 11px;
        margin-top: 30px;
        text-shadow: 0px -2px 1px #6b67ed;
        box-shadow: 0px -2px 1px #6b67ed;
    }

    .controls {
        display: flex;
        justify-content: space-between;

        .dpad {
            position: relative;
            display: inline-block;
            width: 90px;
            height: 90px;
            z-index: 5;

            >* {
                width: 33%;
                height: 33%;
                position: absolute;
                background-color: #565e6a;
                cursor: pointer;

                i {
                    position: relative;
                    display: block;
                    margin: 0 auto;
                    text-align: center;
                    height: 100%;
                    font-size: 28px;
                    color: #333a4a;
                    text-shadow: 0px -0.5px 0px #aaa;
                }
            }

            .up {
                top: calc(0% + 4px);
                left: 33%;
                border-top: 4px solid black;
                border-left: 4px solid black;
                border-right: 4px solid black;
                border-radius: 5px 5px 0px 0px;

                &:active {
                    background: linear-gradient(to top, #565e6a 0%, #333 100%);
                }

                i {
                    top: -5px;
                }
            }

            .right {
                top: 33%;
                left: calc(66% - 4px);
                border-top: 4px solid black;
                border-bottom: 4px solid black;
                border-right: 4px solid black;
                border-radius: 0px 5px 5px 0px;
                box-shadow: 0px -2px 0px #888 inset;

                &:active {
                    background: linear-gradient(to right, #565e6a 0%, #333 100%);
                }

                i {
                    top: -5px;
                }
            }

            .down {
                top: calc(66% - 4px);
                left: 33%;
                border-left: 4px solid black;
                border-bottom: 4px solid black;
                border-right: 4px solid black;
                border-radius: 0px 0px 5px 5px;
                box-shadow: 0px -2px 0px #888 inset;

                &:active {
                    background: linear-gradient(to bottom, #565e6a 0%, #333 100%);
                }
            }

            .left {
                top: 33%;
                left: calc(0% + 4px);
                border-top: 4px solid black;
                border-bottom: 4px solid black;
                border-left: 4px solid black;
                border-radius: 5px 0px 0px 5px;
                box-shadow: 0px -2px 0px #888 inset;

                i {
                    top: -5px;
                }

                &:active {
                    background: linear-gradient(to left, #565e6a 0%, #333 100%);
                }
            }

            .middle {
                top: 33%;
                left: 33%;
                z-index: -5;

                &::after {
                    content: '';
                    position: absolute;
                    top: 20%;
                    left: 20%;
                    display: inline-block;
                    border: 1px solid #6e737a;
                    background: linear-gradient(to bottom, #6d7075 0%, #6d7075 30%, #23272f 70%, #23272f 100%);
                    border-radius: 50%;
                    height: 60%;
                    width: 60%;
                }
            }

            .up-down {
                background-color: #565e6a;
                border: 4px solid black;
                border-radius: 5px;
                width: 20px;
                height: 60px;
            }

            .left-right {
                background-color: #565e6a;
                border: 4px solid black;
                border-radius: 5px;
                width: 60px;
                height: 20px;
            }
        }

        .a-b {
            position: relative;
            display: inline-block;
            width: 120px;
            height: 90px;

            .a,
            .b {
                position: absolute;
                display: inline-block;
                font-size: 22px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                border-radius: 50%;
                background-color: #2c313e;
                border-bottom: 2px solid #888;
                box-shadow: -1px 1px 5px black, 0px 0px 5px black inset;
                text-shadow: 0px -1px 1px #888;
                color: #2c313e;
                text-align: center;
                -webkit-user-select: none;
                cursor: pointer;
                transition: box-shadow 0.1s ease-out, border 0.1s ease-out, line-height 0.2s ease-out;

                &:active {
                    box-shadow: -1px 1px 1px black, 0px 0px 5px black inset;
                    border-width: 0px;
                    line-height: 45px;
                }
            }

            .a {
                top: 15px;
                right: 10px;
            }

            .b {
                top: 35px;
                left: 0%;
            }
        }
    }

    .start-select {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;

        .select,
        .start {
            display: inline-block;
            color: #6b67ed;
            text-shadow: 0px -1px 0px #3436bf;
            letter-spacing: -1px;
            width: 60px;
            font-size: 16px;
            text-align: center;
            margin-top: 60px;

            &::before {
                content: '';
                display: block;
                margin: 0 auto;
                width: 30px;
                height: 10px;
                margin-bottom: 5px;
                border-radius: 40%;
                background: linear-gradient(to bottom, #0b0a1c 0%, #0b0a1c 30%, #62636c 70%, #62636c 100%);
                background-repeat: no-repeat;
                border: 2px solid #0b0a1c;
                box-shadow: 0px -2px 1px #8482e9;
                cursor: pointer;
            }

            &:active::before {
                background: linear-gradient(to bottom, #0b0a1c 0%, #0b0a1c 50%, #62636c 100%);
            }
        }
    }

    .speaker {
        position: absolute;
        display: flex;
        width: 75px;
        height: 75px;
        right: 15px;
        bottom: 5px;
        justify-content: space-between;
        flex-wrap: wrap;
        z-index: 100;
        transform: skewY(-10deg);

        .dot {
            width: 7px;
            height: 7px;
            margin: 1px;
            border-radius: 50%;
        }

        .dot.placeholder {
            background-color: transparent;
        }

        .dot.open {
            background-color: #0a0717;
            box-shadow: 0px 0px 2px #7c7be0 inset;
        }

        .dot.closed {
            background: linear-gradient(to bottom, #6664e5 0%, #2d3590 100%);
            box-shadow: 0px 0px 2px #7c7be0 inset;
        }
    }
}

.gameboy {
    margin: 0 auto;
}

.info {
    position: absolute;
    width: 100%;
    top: calc(70%);
    text-align: center;
    color: darken(#BDC3C7, 50%);
    //font-size: 40px;

    &::first-letter {
        color: #EC644B;
    }
}

.wrapper {
    position: relative;
    margin: 0 auto;
    transform: scale(.7);

    &:hover {
        // animation: vibe 1s ease;
        cursor: pointer;
    }

    .mid_right {
        position: absolute;
        height: 230px;
        width: 119px;
        background-color: #BDC3C7;
        transform: rotate(8deg);
        top: 139px;
        left: 124px;
        z-index: 2;
    }

    .mid_left {
        position: absolute;
        height: 230px;
        width: 119px;
        background-color: #BDC3C7;
        transform: rotate(-8deg);
        top: 139px;
        left: 17px;
        z-index: 2;
    }

    .bott_left {
        height: 200px;
        width: 200px;
        background-color: #BDC3C7;
        border-radius: 50%;
        position: absolute;
        top: 250px;
        left: calc(50% - 100px);
    }

    .cover {
        &:hover {
            transform: scale(1.05);
        }

        position: absolute;
        height: 230px;
        width: 230px;
        top: 20px;
        left: calc(50% - 115px);
        background-color: darken(#BDC3C7, 20%);
        z-index: 2;
        border-radius: 50%;
        box-shadow: 0 0 10px -5px darken(#19A3FF, 30%);
    }

    .joy_left_wrapper,
    .joy_right_wrapper {
        position: absolute;
        height: 260px;
        width: 260px;
        background-color: #BDC3C7;
        border-radius: 50%;
        z-index: 2;
        top: 200px;
        transform: rotate(20deg);
        transition: transform 0.3s ease-in-out;
    }

    .joy_left_wrapper {
        left: calc(50% - 310px);

        .controll {
            position: absolute;
            height: 40px;
            width: 130px;
            top: calc(50% - 20px);
            left: calc(50% - 65px);
            transform: rotate(-20deg);
            border-radius: 25% 25% 25% 25% / 70% 70%;
            background-color: darken(#BDC3C7, 50%);
            box-shadow: 0 0 15px -5px darken(#19A3FF, 60%);

            &:after {
                content: '';
                position: absolute;
                height: 40px;
                width: 130px;
                top: calc(50% - 20px);
                left: calc(50% - 65px);
                transform: rotate(-90deg);
                border-radius: 25% 25% 25% 25% / 70% 70%;
                background-color: darken(#BDC3C7, 50%);
            }
        }
    }

    .joy_right_wrapper {
        left: calc(50% + 50px);
        transform: rotate(-20deg);

        .cover {
            &:hover {
                transform: scale(1.05) rotate(20deg);
            }

            transform: rotate(20deg);

            .button_grp1 {
                position: absolute;
                height: 50px;
                width: 50px;
                background-color: #E9D460;
                border-radius: 50%;
                top: 35px;
                left: calc(50% - 25px);
                box-shadow: 0 0 20px -5px black;

                &:after {
                    content: '';
                    position: absolute;
                    height: 50px;
                    width: 50px;
                    background-color: #66CC99;
                    border-radius: 50%;
                    top: 115px;
                    left: calc(50% - 25px);
                    box-shadow: 0 0 20px -5px black;
                }
            }

            .button_grp2 {
                position: absolute;
                height: 50px;
                width: 50px;
                background-color: #EC644B;
                border-radius: 50%;
                top: 150px;
                left: calc(50% - 25px);
                box-shadow: 0 0 20px -5px black;
                transform: rotate(90deg);
                transform-origin: 84px 25px;

                &:after {
                    content: '';
                    position: absolute;
                    height: 50px;
                    width: 50px;
                    background-color: #19A3FF;
                    border-radius: 50%;
                    top: 115px;
                    left: calc(50% - 25px);
                    box-shadow: 0 0 20px -5px black;
                }
            }
        }
    }

    .joy_midd_wrapper {
        position: absolute;
        height: 180px;
        width: 200px;
        background-color: #BDC3C7;
        top: 265px;
        left: calc(50% - 100px);
        z-index: 1;
        box-shadow: 0 0 15px -5px black;

        &:before {
            content: '';
            position: absolute;
            height: 30px;
            width: 100px;
            background-color: darken(#BDC3C7, 20%);
            border-radius: 25% 25% 25% 25% / 70% 70%;
            top: calc(50% - 15px);
            left: calc(50% - 50px);
            box-shadow: 0 0 15px -5px black;
        }

        &:after {
            content: '';
            position: absolute;
            height: 50px;
            width: 50px;
            background-color: darken(#BDC3C7, 40%);
            border-radius: 50%;
            top: calc(50% - 25px);
            left: calc(50% - 25px);
            box-shadow: 0 0 15px -5px black;
        }
    }
}

.wire {
    position: absolute;
    height: 200px;
    width: 260px;
    border-radius: 50%;
    top: 110px;
    left: calc(50% - 20px);
    border-width: 10px 10px 10px 5px;
    border-color: transparent transparent transparent #333;
    border-style: solid solid solid solid;
    z-index: -1;

    &:after {
        content: '';
        position: absolute;
        height: 200px;
        width: 260px;
        border-radius: 50%;
        top: -126px;
        left: calc(50% - 355px);
        border-width: 10px 5px 10px 5px;
        border-color: transparent #333 transparent transparent;
        border-style: solid solid solid solid;
    }

    &:before {
        content: '';
        position: absolute;
        height: 200px;
        width: 260px;
        border-radius: 50%;
        top: -241px;
        left: calc(50% - 134px);
        border-width: 10px 10px 10px 5px;
        border-color: transparent transparent transparent #333;
        border-style: solid solid solid solid;
    }
}
</style>
