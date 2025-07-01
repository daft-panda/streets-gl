import React, {useContext} from "react";
import {AtomsContext} from "~/app/ui/UI";
import {useAtomValue} from "jotai";
import SettingRange from "~/app/ui/components/SettingsModalPanel/SettingRange";
import SettingSelect from "~/app/ui/components/SettingsModalPanel/SettingSelect";
import { SettingsObjectEntry } from "streets-gl-lib/dist/lib/src/core/settings/SettingsObject";

const SettingAuto: React.FC<{
	id: string;
	parent?: SettingsObjectEntry;
}> = ({id, parent}) => {
	const atoms = useContext(AtomsContext);
	const schema = useAtomValue(atoms.settingsSchema)[id];

	if (schema.parent && schema.parentStatusCondition && parent) {
		if (!schema.parentStatusCondition.includes(parent.statusValue)) {
			return null;
		}
	}

	if (schema.status) {
		return <SettingSelect id={id}/>;
	}

	if (schema.selectRange) {
		return <SettingRange id={id}/>;
	}

	return null;
}

export default React.memo(SettingAuto);