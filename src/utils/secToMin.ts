export function secToMin(seconds: number) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondLeft = String(seconds % 60).padStart(2, "0");

    return `${minutes}:${secondLeft}`;
}