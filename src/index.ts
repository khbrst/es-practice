import { testInterfaces } from "./interfaces";
import { testClassDefaultParameter, testAbstractClass, testConstructorFunctions } from "./classes";
import { testRestParameter, testThisParameters, testThisParametersInCallbacks, testFunctionOverloads } from "./functions";
import { testGenericConstraints, testUsingTypeParameterGenericConstraints, testUsingClassTypesInGenerics } from "./generic";

testInterfaces();
testClassDefaultParameter();
testAbstractClass();
testConstructorFunctions();
testRestParameter();
testThisParameters();
testThisParametersInCallbacks();
testFunctionOverloads();
testGenericConstraints();
testUsingTypeParameterGenericConstraints();
testUsingClassTypesInGenerics();
