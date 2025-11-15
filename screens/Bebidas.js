import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { Heading } from '@/components/ui/heading';
import { Link, LinkText } from '@/components/ui/link';
import { HStack } from '@/components/ui/hstack';
import { Icon, ArrowRightIcon } from '@/components/ui/icon';
import { Center } from '@/components/ui/center';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import {
    Table, TableBody, TableHeader, TableRow,
    TableHead, TableData, TableFooter, TableCaption,
} from '@/components/ui/table';
import { Box } from '@/components/ui/box';
import { ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';

function Bebidas() {
    return (
        <ScrollView>
            <Center justifyContent="center" alignItems="center">
                <Card className="p-5 rounded-lg max-w-[360px] m-3">
                    <Image
                        source={require("../image/palomitas.png")}
                        size={'2xl'}
                    />
                    <Text className="text-sm font-normal mb-2 text-typography-700">
                        Fashion Clothing
                    </Text>
                    <VStack className="mb-6">
                        <Heading size="md" className="mb-4">
                            Cotton Kurta
                        </Heading>
                        <Text size="sm">
                            Floral embroidered notch neck thread work cotton kurta in white and
                            black.
                        </Text>
                    </VStack>
                    <Box className="flex-col sm:flex-row">
                        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
                            <ButtonText size="sm">Add to cart</ButtonText>
                        </Button>
                        <Button
                            variant="outline"
                            className="px-4 py-2 border-outline-300 sm:flex-1"
                        >
                            <ButtonText size="sm" className="text-typography-600">
                                Wishlist
                            </ButtonText>
                        </Button>
                    </Box>
                </Card>
            </Center>
            <Box mt="$B" style={{ width: 100, height: 10 }} />
            <Center>
                <Card>
                    <Box className="rounded-lg overflow-hidden w-full">
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email Address</TableHead>
                                    <TableHead>Phone Number</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableData>Rajesh Kumar</TableData>
                                    <TableData className="font-normal">rajesh@example.com</TableData>
                                    <TableData className="font-normal">1234567890</TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Priya Sharma</TableData>
                                    <TableData className="font-normal">priya@example.com</TableData>
                                    <TableData className="font-normal">1234567890</TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Ravi Patel</TableData>
                                    <TableData className="font-normal">ravi@example.com</TableData>
                                    <TableData className="font-normal">1234567890</TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Ananya Gupta</TableData>
                                    <TableData className="font-normal">ananya@example.com</TableData>
                                    <TableData className="font-normal">1234567890</TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Arjun Singh</TableData>
                                    <TableData className="font-normal">arjun@example.com</TableData>
                                    <TableData className="font-normal">1234567890</TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Nisha Verma</TableData>
                                    <TableData className="font-normal">nisha@example.com</TableData>
                                    <TableData className="font-normal">1234567890</TableData>
                                </TableRow>
                            </TableBody>
                            <TableCaption className="font-normal">
                                Showing recent membership details
                            </TableCaption>
                        </Table>
                    </Box>
                </Card>
            </Center>
        </ScrollView>
    );
}
export default Bebidas;