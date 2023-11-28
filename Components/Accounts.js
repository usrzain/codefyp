import supabase from '../lib/supabase';
import { Button, Input } from 'react-native-elements';
import { Session } from '@supabase/supabase-js';
import { StyleSheet } from 'react-native';

// Create a reusable function to get the user's profile
async function getProfile(session) {
  try {
    const { data, error, status } = await supabase.from('profiles').select(`username, website, avatar_url`).eq('id', session?.user.id).single();
    if (error && status !== 406) {
      throw error;
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
    }
  }
  return null;
}

// Create a reusable function to update the user's profile
async function updateProfile(session, updates) {
  try {
    const { error } = await supabase.from('profiles').upsert(updates);
    if (error) {
      throw error;
    }
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
    }
  }
}

// The main function that will be executed when the component mounts
async function Account({ session }) {
  // Get the user's profile
  const profile = await getProfile(session);

  // Update the state with the profile data
  const [username, setUsername] = useState(profile?.username || '');
  const [website, setWebsite] = useState(profile?.website || '');
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url || '');

  // Handle the form submit event
  async function handleSubmit() {
    const updates = {
      id: session?.user.id,
      username,
      website,
      avatarUrl,
      updated_at: new Date(),
    };

    // Update the user's profile
    await updateProfile(session, updates);

    // Get the updated profile data
    const updatedProfile = await getProfile(session);

    // Update the state with the updated profile data
    setUsername(updatedProfile?.username || '');
    setWebsite(updatedProfile?.website || '');
    setAvatarUrl(updatedProfile?.avatar_url || '');
  }

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Input label="Username" value={username} onChangeText={setUsername} />
      </View>
      <View style={styles.formGroup}>
        <Input label="Website" value={website} onChangeText={setWebsite} />
      </View>

      <Button title="Update" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  formGroup: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
});

export default Account;
