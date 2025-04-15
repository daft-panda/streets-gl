export default class ShaderPrecompiler {
	public static resolveNameAndDefines(shaderSource: string, name: string, defines: Record<string, string>): string {
		const lines = shaderSource.split('\n');
		let lineIndex = 0;

		for (let i = 0; i < lines.length; i++) {
			if (lines[i].startsWith('#version')) {
				lineIndex = i + 1;
			}
		}

		let definesString = `#define SHADER_NAME ${name}\n`;

		for (const [key, value] of Object.entries(defines)) {
			definesString += `#define ${key} ${value}\n`;
		}

		lines.splice(lineIndex, 0, definesString);

		return lines.join('\n');
	}
}