import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPrediction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prediction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly stock_ticker?: string | null;
  readonly stock?: string | null;
  readonly initial_price?: number | null;
  readonly initial_date?: string | null;
  readonly predicition_price?: number | null;
  readonly predicition_date?: string | null;
  readonly reasoning?: string | null;
  readonly positive_error?: number | null;
  readonly negative_error?: number | null;
  readonly positive_kill_error?: number | null;
  readonly negative_kill_error?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrediction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prediction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly stock_ticker?: string | null;
  readonly stock?: string | null;
  readonly initial_price?: number | null;
  readonly initial_date?: string | null;
  readonly predicition_price?: number | null;
  readonly predicition_date?: string | null;
  readonly reasoning?: string | null;
  readonly positive_error?: number | null;
  readonly negative_error?: number | null;
  readonly positive_kill_error?: number | null;
  readonly negative_kill_error?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prediction = LazyLoading extends LazyLoadingDisabled ? EagerPrediction : LazyPrediction

export declare const Prediction: (new (init: ModelInit<Prediction>) => Prediction) & {
  copyOf(source: Prediction, mutator: (draft: MutableModel<Prediction>) => MutableModel<Prediction> | void): Prediction;
}