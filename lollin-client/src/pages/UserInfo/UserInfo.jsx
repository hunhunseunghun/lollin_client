import React, { useState } from 'react';
import UserInfoMatching from '../../component/UserInfoMatching/UserInfoMatching.jsx';
import UserInfoHistory from '../../component/UserInfoHistory/UserInfoHistory.jsx';
import UserInfoMatchingDetail from '../../component/UserInfoMatchingDetail/UserInfoMatchingDetail.jsx';
import { Container } from './UserInfoStyled.jsx';

const UserInfo = ({ summonerName }) => {
	let [participant, setParticipant] = useState({});
	const handleUserClick = (participant) => {
		setParticipant(participant);
	};

	return (
		<Container>
			<UserInfoMatching
				summonerName={summonerName}
				handleUserClick={handleUserClick}
			/>
			<UserInfoMatchingDetail
				summonerName={summonerName}
				participant={participant}
			/>
			<UserInfoHistory summonerName={summonerName} />
		</Container>
	);
};

export default UserInfo;
