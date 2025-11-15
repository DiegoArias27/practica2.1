import { GridItem } from '@/components/ui/grid';
import { Image} from 'react-native';

function GridCustom({ imageSrc }) {
  return (
    <GridItem
      className="bg-background-200 p-2 rounded-md"
      _extra={{
        className: 'col-span-1',
      }}
      style={{ backgroundColor: '#00235D', height:170, marginLeft:0}}
    >
      <Image
        source={imageSrc}
        style={{ width: 95, height: 150, borderRadius: 5, margin:0}}
        resizeMode="cover"
      />
    </GridItem>
  );
}

export default GridCustom;
