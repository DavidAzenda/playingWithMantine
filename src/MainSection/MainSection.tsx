import { Group, Stack, Title, Text, Button } from '@mantine/core';
import { FaHeart } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import styles from './MainSection.module.css';
import nigeria from '../assets/Nigeria-Flag-icon.png';
import nurse from '../assets/nurse.png';
import liberia from '../assets/LR-Liberia-Flag-icon.png';
import thumbsUp from '../assets/icon.png';
import heart from '../assets/heart.png';
import robot from '../assets/robot.png';
import couple from '../assets/couple.png';

interface Props {
	scrollIntoView: (params?: ScrollIntoViewAnimation | undefined) => void;
}

interface ScrollIntoViewAnimation {
	/** target element alignment relatively to parent based on current axis */
	alignment?: 'start' | 'end' | 'center';
}

export function MainSection({ scrollIntoView }: Props) {
	return (
		<>
			<Group
				// gap={'300'}
				justify="space-between"
				className={styles.wrapper}>
				<Stack gap={'40px'}>
					<div className={styles.title}>
						Let AI Find Y
						<span>
							<FaHeart
								size={50}
								style={{ color: '#FF3232' }}
							/>
						</span>
						ur True <span style={{ color: '#CB0000' }}>Match</span>
					</div>
					<Stack gap={'20px'}>
						<div className={styles.subHeader}>
							Stop wasting your time with other dating sites. Find your true match
							within minutes
						</div>
						<Button
							bg={'#FF3232'}
							size="lg"
							style={{ borderColor: '#CB0000', width: '200px' }}
							rightSection={<FiArrowRight size="24px" />}
							onClick={() => scrollIntoView({ alignment: 'start' })}>
							JOIN NOW
						</Button>
					</Stack>
				</Stack>
				<div className={styles.parent}>
					<img
						src={couple}
						className={styles.couple}></img>
					<div className={styles.bigCircle}>
						<div className={styles.smallCircle}>
							<div className={styles.box}>
								<img
									src={nigeria}
									className={styles.img}></img>
							</div>
							<div className={styles.box2}>
								<img
									src={nurse}
									className={styles.img}></img>
							</div>
							<div className={styles.box3}>
								<img
									src={liberia}
									className={styles.img}></img>
							</div>
							<div className={styles.box4}>
								<img
									src={thumbsUp}
									className={styles.img}></img>
							</div>
							<div className={styles.box5}>
								<img
									src={heart}
									className={styles.img}></img>
							</div>
							<div className={styles.box6}>
								<img
									src={robot}
									className={styles.img}></img>
							</div>
						</div>
					</div>
				</div>
			</Group>
		</>
	);
}
