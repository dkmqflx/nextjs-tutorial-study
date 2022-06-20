import Image from 'next/image';
import img from '../public/1.jpg';

function PetsPage() {
  return (
    <div>
      <Image src={img} placeholder="blur" alt="pet" width="280" height="420" />
      {/* blur 효과 적용된다 */}

      {['1', '2', '3', '4', '5'].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;

/*
그냥 img 태그 쓰면 원본 이미지 받기 때문에 사이지가 너무 크다 

Image 태그를 사용하면 optimized 된 이미지를 받을 수 있다.

network 탭 보면 이미지 크기가 줄어든 것을 확인할 수 있다.

파일 형식도 jpg가 아닌 webp 형식이다
.next/chace/images에서 확인할 수 있다 

장점1. automatic optimization of the image size and foramt

장점2. lazy loading
network 탭을 보면 viewport에 보이는 이미지만 다운 받고 
스크롤 해서 다른 이미지가 보이면 그 때 다운 로드를 받는다 

장점3. the third benefits is the ability to render a placeholder image
while the actual image is stil loading
and what is great is that without any additional effot by simply specifying a prop on the image
we can render a blurred version of the action image as the placeholder
for next js to automatically generate the blurred image though, the path has to be static
so we can not dynamic source
*/
