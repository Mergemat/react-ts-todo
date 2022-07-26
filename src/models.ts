export class CTask {
    text: string;
    completed: boolean;
    constructor(text: string) {
        this.text = text ? text : "Some task"; // пустая стринга сюда пройти не сможет, потому что инпут обязательный. но ЕСЛИ ВДРУГ она как-то пройдет, то будет красивой)
        this.completed = false;
    }

    changeComplete = () => {
        this.completed = !this.completed;
    };
}
