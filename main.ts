//% weight=0 color=#3CB371 icon="\uf13d" block="Tools"
namespace tools {
    /**
    * Ӌ���L������e���K�؂�
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    * Ӌ���L������e�����؂���ֻ�@ʾ��LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
}