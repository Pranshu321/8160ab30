import { Group, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

type IProps = {
	property: string
	value: string
}

const ShowCallProperty = ({ property, value }: IProps) => {
	const isMobile = useMediaQuery(`(max-width: 36em)`)

	return (
		<Group gap={isMobile ? '4px' : 'xs'}>
			<Text style={{
				fontWeight: "700"
			}} fw="bolder" fz="sm">
				{property}:
			</Text>
			<Text style={value === 'Missed Call' ? { color: "red", fontWeight: "700" } : { color: "#2AC420", fontWeight: "700" }} fz={isMobile ? 'sm' : 'md'}>{value}</Text>
		</Group>
	)
}
export default ShowCallProperty
