/*

interface SpinnerDialogStatic {
    (kind: string): Eagle;
    new (kind: string): Eagle;

    kind: string;
    fly(): void
}

declare var SpinnerDialog: SpinnerDialogStatic;

export = SpinnerDialog;

*/

declare module SpinnerDialog {
}

interface SpinnerDialogStatic {
  show(title, message, cancelCallback):void;
}
declare var SpinnerDialog: SpinnerDialogStatic;

declare module "SpinnerDialog" {
	export = SpinnerDialog;
}
