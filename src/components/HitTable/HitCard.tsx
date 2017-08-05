import * as React from 'react';
import { Card, Stack } from '@shopify/polaris';
import ActionSection from './ActionSection';
// import HitActions from './HitActions';

import InfoSection from './InfoSection';

export interface Props {
  data: HitTableEntry;
}

const HitCard = ({ data }: Props) => {
  const { requester, reward, title, groupId } = data;
  return (
    <Card>
      <Stack vertical={false} distribution="leading">
        <ActionSection reward={reward} groupId={groupId} />
        <InfoSection requester={requester} title={title} />
      </Stack>
    </Card>
  );
};

export default HitCard;
