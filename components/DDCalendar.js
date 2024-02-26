import React, { useCallback, useState } from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';
import { View } from 'react-native';

export default function DDCalendar() {
  const [value, setValue] = useState(new Date());

  const onChange = useCallback(
    (val) => {
      setValue(val);
    },
    [setValue],
  );

  return (
    <View> {/* Wrap the Calendar component in a View */}
      <Calendar value={value} onChange={onChange} />
    </View>
  );
}
