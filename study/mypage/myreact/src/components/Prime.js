import React from "react";

function Prime() {
  // 우리는 사용자가 선택한 숫자를 상태로 유지합니다.
  const [selectedNum, setSelectedNum] = React.useState(100);

  // 0과 사용자가 선택한 숫자 `selectedNum` 사이의 모든 소수를 계산합니다.
  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // 컴퓨터가 과부화되는 것을 방지하기 위해, 최대 100k로 설정
            let num = Math.min(100_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
}

// 주어진 숫자가 소수인지 여부를 계산하는 헬퍼 함수입니다.
function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export default Prime;